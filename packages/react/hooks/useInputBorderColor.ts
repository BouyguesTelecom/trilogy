import type { InputBorderColor, InputBorderColorValues } from '@/interfaces/colors'
import type { ActiveTrilogyTheme } from '@/theme'
import { useThemeSelector } from './useThemeSelector'

const tokens = {
  selected: 'inputBorderSelected',
  inactive: 'inputBorderInactive',
  disabled: 'inputBorderDisabled',
} as const satisfies Record<InputBorderColorValues, keyof ActiveTrilogyTheme['colors']>

/** Returns the selected input border color token from the active theme. */
export const useInputBorderColor = (color: InputBorderColor | InputBorderColorValues): string =>
  useThemeSelector((theme) => theme.colors[tokens[color]])
