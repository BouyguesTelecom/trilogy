/**
 * Default configuration values for the Slider component.
 * Centralised so the web and native implementations stay in sync.
 */
export enum SliderDefaults {
  AUTOPLAY_DELAY = 3000,
  SLIDES_PER_VIEW = 1,
  SPACE_BETWEEN = 0,
  /** Transition duration for slide movement, in ms */
  TRANSITION_MS = 350,
  /** Minimum pointer travel (px) before a drag direction is locked */
  DRAG_THRESHOLD = 5,
}

/**
 * Min-width (px) for each Trilogy named breakpoint, mobile-first.
 * Matches `$tablet`, `$desktop`, `$widescreen` and `$fullhd` from the styles
 * package (`utilities/variables/_responsiveness.scss`, with `$gap: 24px`).
 */
export const SLIDER_BREAKPOINT_PX = {
  mobile: 0,
  tablet: 768,
  desktop: 1024, // 976 + 2 * 24
  widescreen: 1240, // 1192 + 2 * 24
  fullhd: 1388, // 1340 + 2 * 24
} as const

export type SliderBreakpointName = keyof typeof SLIDER_BREAKPOINT_PX
