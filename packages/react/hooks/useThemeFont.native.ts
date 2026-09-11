import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { THEME_FONTS_TRILOGY } from '@/theme'

type ThemeFontSizeKey = {
  [Key in keyof typeof THEME_FONTS_TRILOGY]: Key extends `size${string}` | `${string}Size` ? Key : never
}[keyof typeof THEME_FONTS_TRILOGY]

export type ThemeFontSizes = Pick<typeof THEME_FONTS_TRILOGY, ThemeFontSizeKey>

type ThemeFontWeightKey = {
  [Key in keyof typeof THEME_FONTS_TRILOGY]: Key extends `fontWeight${string}` ? Key : never
}[keyof typeof THEME_FONTS_TRILOGY]

export type ThemeFontWeights = Pick<typeof THEME_FONTS_TRILOGY, ThemeFontWeightKey>

/**
 * Hook to get the current theme font family values.
 * @returns The current theme font family object, with default values if the theme is not available.
 */
export const useThemeFontFamily = () => {
  const { theme } = useContext(TrilogyThemeContext)
  return {
    family1: theme?.fonts?.fontTitle1 || THEME_FONTS_TRILOGY.fontTitle1,
    family2: theme?.fonts?.fontTitle3 || THEME_FONTS_TRILOGY.fontTitle3,
  }
}

export const useThemeFontSizes = (): ThemeFontSizes => {
  const { theme } = useContext(TrilogyThemeContext)
  const fonts = theme?.fonts || THEME_FONTS_TRILOGY

  return Object.fromEntries(
    Object.entries(fonts).filter(([key]) => key.startsWith('size') || key.endsWith('Size')),
  ) as ThemeFontSizes
}

export const useThemeFontWeights = (): ThemeFontWeights => {
  const { theme } = useContext(TrilogyThemeContext)
  const fonts = theme?.fonts || THEME_FONTS_TRILOGY

  return Object.fromEntries(Object.entries(fonts).filter(([key]) => key.startsWith('fontWeight'))) as ThemeFontWeights
}
