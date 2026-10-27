import type { IconColor, IconColorValues } from '@/interfaces/colors'
import type { ActiveTrilogyTheme } from '@/theme'
import { useThemeSelector } from './useThemeSelector'

const tokens = {
  primary: 'icon',
  selected: 'iconSelected',
  disabled: 'iconDisabled',
  accent: 'iconAccent',
  inverse: 'iconInverse',
  success: 'iconSuccess',
  warning: 'iconWarning',
  error: 'iconError',
  information: 'iconInformation',
  brand: 'iconBrand',
} as const satisfies Record<IconColorValues, keyof ActiveTrilogyTheme['colors']>

/** Returns the selected icon token from the active theme. */
export const useIconColor = (color: IconColor | IconColorValues): string =>
  useThemeSelector((theme) => theme.colors[tokens[color]])
