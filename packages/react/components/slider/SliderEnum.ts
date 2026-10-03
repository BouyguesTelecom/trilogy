// SliderEnum.ts

/**
 * Default configuration values for the Slider component.
 * Centralised so the web and native implementations stay in sync.
 */

export enum SliderDefaults {
  AUTOPLAY_DELAY = 3000,
  SPACE_BETWEEN = 0,
  TRANSITION_MS = 350,
  DRAG_THRESHOLD = 5,
}

export const SLIDER_BREAKPOINT_PX = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  widescreen: 1240,
  fullhd: 1388,
} as const

export type SliderBreakpointName = keyof typeof SLIDER_BREAKPOINT_PX

export enum SlidesNum {
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

export type SlidesNumConfig = {
  mobile?: SlidesNum.ONE | SlidesNum.TWO
  tablet?: SlidesNum.ONE | SlidesNum.TWO | SlidesNum.THREE
  desktop?: SlidesNum.ONE | SlidesNum.TWO | SlidesNum.THREE
}

/**
 * Corner radius values for Slider.
 */
export enum SliderRadiusValues {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export const SLIDER_RADIUS_PIXELS: Record<SliderRadiusValues, number> = {
  [SliderRadiusValues.SMALL]: 8,
  [SliderRadiusValues.MEDIUM]: 16,
  [SliderRadiusValues.LARGE]: 24,
}
