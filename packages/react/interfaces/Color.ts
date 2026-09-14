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
 * Trilogy background color, based on the theme background tokens
 */
export enum TrilogyBackgroundColor {
  PRIMARY = 'PRIMARY',
  PRIMARY_SUBTLE = 'PRIMARY_SUBTLE',
  SECONDARY = 'SECONDARY',
  SECONDARY_SUBTLE = 'SECONDARY_SUBTLE',
  SUCCESS = 'SUCCESS',
  SUCCESS_SUBTLE = 'SUCCESS_SUBTLE',
  WARNING = 'WARNING',
  WARNING_SUBTLE = 'WARNING_SUBTLE',
  ERROR = 'ERROR',
  ERROR_SUBTLE = 'ERROR_SUBTLE',
  INFORMATION = 'INFORMATION',
  INFORMATION_SUBTLE = 'INFORMATION_SUBTLE',
  ACCENT = 'ACCENT',
  ACCENT_SUBTLE = 'ACCENT_SUBTLE',
  BRAND = 'BRAND',
  BRAND_SUBTLE = 'BRAND_SUBTLE',
  DISABLED = 'DISABLED',
  INACTIVE = 'INACTIVE',
}

export type TrilogyBackgroundColorValues = `${TrilogyBackgroundColor}`

/**
 * Trilogy text color, based on the theme text tokens
 */
export enum TrilogyTextColor {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  INFORMATION = 'INFORMATION',
  ACCENT = 'ACCENT',
  BRAND = 'BRAND',
  DISABLED = 'DISABLED',
  PLACEHOLDER = 'PLACEHOLDER',
  SELECTED = 'SELECTED',
  INVERSE = 'INVERSE',
}

export type TrilogyTextColorValues = `${TrilogyTextColor}`

/**
 * Trilogy color values
 */
export const colors: Record<TrilogyColor, string[]> = DEFAULT_TRILOGY_COLORS as unknown as Record<
  TrilogyColor,
  string[]
>
