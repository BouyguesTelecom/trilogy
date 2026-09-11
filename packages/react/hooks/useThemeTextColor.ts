import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { useThemeMode } from './useThemeMode'

export type ThemeTextColorVariant =
  | 'SUCCESS'
  | 'INFORMATION'
  | 'WARNING'
  | 'ERROR'
  | 'PRIMARY'
  | 'SECONDARY'
  | 'PLACEHOLDER'
  | 'SELECTED'
  | 'INVERSE'
  | 'ACCENT'
  | 'DISABLED'
  | 'BRAND'

/**
 * Hook to get a theme text color by variant.
 */
export const useThemeTextColor = (variant?: ThemeTextColorVariant): string => {
  const { theme } = useContext(TrilogyThemeContext)
  const themeMode = useThemeMode()
  const colors = theme.colors[themeMode]

  switch (variant) {
    case 'SUCCESS':
      return colors.textSuccess
    case 'INFORMATION':
      return colors.textInformation
    case 'WARNING':
      return colors.textWarning
    case 'ERROR':
      return colors.textError
    case 'PRIMARY':
      return colors.textPrimary
    case 'SECONDARY':
      return colors.textSecondary
    case 'PLACEHOLDER':
      return colors.textPlaceholder
    case 'SELECTED':
      return colors.textSelected
    case 'INVERSE':
      return colors.textInverse
    case 'ACCENT':
      return colors.textAccent
    case 'DISABLED':
      return colors.textDisabled
    case 'BRAND':
      return colors.textBrand
    default:
      return colors.textPrimary
  }
}
