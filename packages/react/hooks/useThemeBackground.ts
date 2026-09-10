import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { useThemeMode } from './useThemeMode'

/**
 * Hook to get the background colors based on the variant type.
 * @param variant - The variant type for which to get the background colors.
 * @returns An object containing `backgroundColor` and `backgroundColorSubtle`.
 */
export const useThemeBackground = (
  variant?:
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
    | 'SELECTED_HOVER'
    | 'SELECTED_PRESSED'
    | 'INACTIVE',
): { backgroundColor: string; backgroundColorSubtle: string } => {
  const { theme } = useContext(TrilogyThemeContext)
  const themeMode = useThemeMode()
  const colors = theme?.colors[themeMode]

  switch (variant) {
    case 'INFORMATION':
      return {
        backgroundColor: colors.bgInformation,
        backgroundColorSubtle: colors.bgInformationSubtle,
      }
    case 'SUCCESS':
      return {
        backgroundColor: colors.bgSuccess,
        backgroundColorSubtle: colors.bgSuccessSubtle,
      }
    case 'WARNING':
      return {
        backgroundColor: colors.bgWarning,
        backgroundColorSubtle: colors.bgWarningSubtle,
      }
    case 'ERROR':
      return {
        backgroundColor: colors.bgError,
        backgroundColorSubtle: colors.bgErrorSubtle,
      }
    case 'PRIMARY':
      return {
        backgroundColor: colors.bgPrimary,
        backgroundColorSubtle: colors.bgPrimarySubtle,
      }
    case 'SECONDARY':
      return {
        backgroundColor: colors.bgSecondary,
        backgroundColorSubtle: colors.bgSecondarySubtle,
      }
    case 'ACCENT':
      return {
        backgroundColor: colors.bgAccent,
        backgroundColorSubtle: colors.bgAccentSubtle,
      }
    case 'BRAND':
      return {
        backgroundColor: colors.bgBrand,
        backgroundColorSubtle: colors.bgBrandSubtle,
      }
    case 'DISABLED':
      return {
        backgroundColor: colors.bgDisabled,
        backgroundColorSubtle: colors.bgDisabled,
      }
    case 'SELECTED':
      return {
        backgroundColor: colors.bgSelected,
        backgroundColorSubtle: colors.bgSelected,
      }
    case 'SELECTED_HOVER':
      return {
        backgroundColor: colors.bgSelectedHover,
        backgroundColorSubtle: colors.bgSelectedHover,
      }
    case 'SELECTED_PRESSED':
      return {
        backgroundColor: colors.tokenbackgroundSelectedPressed,
        backgroundColorSubtle: colors.tokenbackgroundSelectedPressed,
      }
    case 'INACTIVE':
      return {
        backgroundColor: colors.bgInactive,
        backgroundColorSubtle: colors.bgInactive,
      }
    default:
      return {
        backgroundColor: colors.bgSecondary,
        backgroundColorSubtle: colors.bgSecondarySubtle,
      }
  }
}
