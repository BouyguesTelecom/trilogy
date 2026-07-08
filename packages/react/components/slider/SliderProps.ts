import { Accessibility, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Per-breakpoint slider configuration.
 */
export interface SliderResponsiveConfig {
  /** Number of slides visible at once at this breakpoint */
  slidesPerView?: number
  /** Gap between slides (px) at this breakpoint */
  spaceBetween?: number
}

/**
 * Responsive overrides keyed by Trilogy's named breakpoints (mobile-first).
 * Each named breakpoint applies from its min width up; the largest matching one
 * wins. Values not overridden fall back to the base `slidesPerView`/`spaceBetween`.
 *
 * Breakpoint min-widths: mobile = 0, tablet = 768px, desktop = 1024px,
 * widescreen = 1240px, fullhd = 1388px.
 *
 * @example
 * { mobile: { slidesPerView: 1 }, tablet: { slidesPerView: 2 }, desktop: { slidesPerView: 3 } }
 */
export interface SliderResponsive {
  mobile?: SliderResponsiveConfig
  tablet?: SliderResponsiveConfig
  desktop?: SliderResponsiveConfig
  widescreen?: SliderResponsiveConfig
  fullhd?: SliderResponsiveConfig
}

/**
 * Slider (carousel) Interface
 */
export interface SliderProps extends Accessibility, Dev, CommonProps {
  children: React.ReactNode
  /** Automatically advance to the next slide */
  autoplay?: boolean
  /** Delay between autoplay transitions, in ms */
  autoplayDelay?: number
  /** Number of slides visible at once (base / mobile) */
  slidesPerView?: number
  /** Gap between slides, in px (base / mobile) */
  spaceBetween?: number
  /** Responsive overrides keyed by Trilogy named breakpoints */
  breakpoints?: SliderResponsive
  /** Infinite loop (clones first/last slides) */
  loop?: boolean
  /** Round the slider viewport corners (24px). Enabled by default. */
  rounded?: boolean
  /** Called when the active (real) slide index changes */
  onSlideChange?: (index: number) => void
}

/**
 * Slider Item Interface
 */
export interface SliderItemProps extends CommonProps {
  children: React.ReactNode
}

export type SliderRef = HTMLElement
export type SliderNativeRef = View

export type SliderItemRef = HTMLDivElement
export type SliderItemNativeRef = View
