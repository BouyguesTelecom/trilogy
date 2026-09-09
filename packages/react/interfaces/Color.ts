import { DEFAULT_TRILOGY_COLORS } from '@/interfaces/defaultColors'

/**
 * Trilogy color
 */
export enum TrilogyColor {
  BACKGROUND = 'WHITE',
  BRAND = 'BRAND',
  BRAND_FADE = 'BRAND_FADE',
  MAIN = 'MAIN',
  MAIN_FADE = 'MAIN_FADE',
  ACCENT = 'ACCENT',
  ACCENT_FADE = 'ACCENT_FADE',
  FONT = 'FONT',
  FONT_PLACEHOLDER = 'FONT_PLACEHOLDER',
  SUCCESS = 'SUCCESS',
  SUCCESS_FADE = 'SUCCESS_FADE',
  INFO = 'INFO',
  INFO_FADE = 'INFO_FADE',
  WARNING = 'WARNING',
  WARNING_FADE = 'WARNING_FADE',
  ERROR = 'ERROR',
  ERROR_FADE = 'ERROR_FADE',
  DISABLED = 'DISABLED',
  DISABLED_FADE = 'DISABLED_FADE',
  NEUTRAL = 'NEUTRAL',
  NEUTRAL_FADE = 'NEUTRAL_FADE',
  STROKE = 'STROKE',
  STROKE_FADE = 'STROKE_FADE',
}

export type TrilogyColorValues = `${TrilogyColor}`

/**
 * Trilogy color values
 */
export const colors: Record<TrilogyColor, string[]> = DEFAULT_TRILOGY_COLORS as unknown as Record<
  TrilogyColor,
  string[]
>
