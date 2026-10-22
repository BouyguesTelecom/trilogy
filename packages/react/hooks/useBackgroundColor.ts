import type { BackgroundColor, BackgroundColorValues } from '@/interfaces/colors'
import type { ActiveTrilogyTheme } from '@/theme'
import { useThemeSelector } from './useThemeSelector'

const tokens = {
  primary: 'bgPrimary',
  'primary-subtle': 'bgPrimarySubtle',
  secondary: 'bgSecondary',
  'secondary-subtle': 'bgSecondarySubtle',
  success: 'bgSuccess',
  'success-subtle': 'bgSuccessSubtle',
  warning: 'bgWarning',
  'warning-subtle': 'bgWarningSubtle',
  error: 'bgError',
  'error-subtle': 'bgErrorSubtle',
  information: 'bgInformation',
  'information-subtle': 'bgInformationSubtle',
  accent: 'bgAccent',
  'accent-subtle': 'bgAccentSubtle',
  brand: 'bgBrand',
  'brand-subtle': 'bgBrandSubtle',
  overlay: 'bgOverlay',
} as const satisfies Record<BackgroundColorValues, keyof ActiveTrilogyTheme['colors']>

/** Returns the selected background token from the active theme. */
export const useBackgroundColor = (color: BackgroundColor | BackgroundColorValues): string =>
  useThemeSelector((theme) => theme.colors[tokens[color]])
