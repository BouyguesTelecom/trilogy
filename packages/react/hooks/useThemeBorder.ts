import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { useThemeMode } from './useThemeMode'

export type ThemeBorderVariant =
  | 'INFORMATION'
  | 'SUCCESS'
  | 'WARNING'
  | 'ERROR'
  | 'PRIMARY'
  | 'SECONDARY'
  | 'ACCENT'
  | 'BRAND'
  | 'DISABLED'
  | 'SELECTED'
  | 'INACTIVE'
  | 'INVERSE'

/**
 * Hook to get a theme border color by variant.
 * @param variant - The variant type for which to get the border color.
 * @returns The border color for the specified variant.
 */
export const useThemeBorder = (variant?: ThemeBorderVariant) => {
  const trilogyTheme = useContext(TrilogyThemeContext)
  if (!trilogyTheme?.theme) return null
  const themeMode = useThemeMode()
  const colors = trilogyTheme?.theme?.colors[themeMode]

  switch (variant) {
    case 'INFORMATION':
      return colors.borderInformation
    case 'SUCCESS':
      return colors.borderSuccess
    case 'WARNING':
      return colors.borderWarning
    case 'ERROR':
      return colors.borderError
    case 'ACCENT':
      return colors.borderAccent
    case 'BRAND':
      return colors.tokenborderBrand
    case 'DISABLED':
      return colors.borderDisabled
    case 'SELECTED':
      return colors.borderSelected
    case 'INACTIVE':
      return colors.borderInactive
    case 'INVERSE':
      return colors.borderInverse
    default:
      return colors.border
  }
}
