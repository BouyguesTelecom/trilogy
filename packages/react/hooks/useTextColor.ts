import type { TextColor, TextColorValues } from '@/interfaces/colors'
import type { ActiveTrilogyTheme } from '@/theme'
import { useThemeSelector } from './useThemeSelector'

const tokens = {
  link: 'textLink',
  'link-hover': 'textLinkHover',
  'link-visited': 'textLinkVisited',
  success: 'textSuccess',
  warning: 'textWarning',
  error: 'textError',
  information: 'textInformation',
  primary: 'textPrimary',
  secondary: 'textSecondary',
  placeholder: 'textPlaceholder',
  selected: 'textSelected',
  inverse: 'textInverse',
  accent: 'textAccent',
  disabled: 'textDisabled',
  brand: 'textBrand',
} as const satisfies Record<TextColorValues, keyof ActiveTrilogyTheme['colors']>

/** Returns the selected text token from the active theme. */
export const useTextColor = (color: TextColor | TextColorValues): string =>
  useThemeSelector((theme) => theme.colors[tokens[color]])
