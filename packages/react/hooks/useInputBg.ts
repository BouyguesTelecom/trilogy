import type { InputBg, InputBgValues } from '@/interfaces/colors'
import type { ActiveTrilogyTheme } from '@/theme'
import { useThemeSelector } from './useThemeSelector'

const tokens = {
  primary: 'inputBg',
  disabled: 'inputBgDisabled',
  'disabled-selected': 'inputBgDisabledSelected',
  inactive: 'inputBgInactive',
  selected: 'inputBgSelected',
  'selected-hover': 'inputBgSelectedHover',
  'selected-pressed': 'inputBgSelectedPressed',
  hover: 'inputBgHover',
  pressed: 'inputBgPressed',
} as const satisfies Record<InputBgValues, keyof ActiveTrilogyTheme['colors']>

/** Returns the selected input background token from the active theme. */
export const useInputBg = (color: InputBg | InputBgValues): string =>
  useThemeSelector((theme) => theme.colors[tokens[color]])
