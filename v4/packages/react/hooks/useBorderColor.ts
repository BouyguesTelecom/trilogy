import type { BorderColor, BorderColorValues } from '@/interfaces/colors'
import type { ActiveTrilogyTheme } from '@/theme'
import { useThemeSelector } from './useThemeSelector'

const tokens = {
  primary: 'border',
  accent: 'borderAccent',
  inverse: 'borderInverse',
  success: 'borderSuccess',
  warning: 'borderWarning',
  error: 'borderError',
  information: 'borderInformation',
  brand: 'borderBrand',
} as const satisfies Record<BorderColorValues, keyof ActiveTrilogyTheme['colors']>

/** Returns the selected border token from the active theme. */
export const useBorderColor = (color: BorderColor | BorderColorValues): string =>
  useThemeSelector((theme) => theme.colors[tokens[color]])
