import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { useThemeMode } from './useThemeMode'

export type ThemeBackgroundVariant =
  | 'INFORMATION'
  | 'INFORMATION_SUBTLE'
  | 'SUCCESS'
  | 'SUCCESS_SUBTLE'
  | 'WARNING'
  | 'WARNING_SUBTLE'
  | 'ERROR'
  | 'ERROR_SUBTLE'
  | 'PRIMARY'
  | 'PRIMARY_SUBTLE'
  | 'SECONDARY'
  | 'SECONDARY_SUBTLE'
  | 'ACCENT'
  | 'ACCENT_SUBTLE'
  | 'BRAND'
  | 'BRAND_SUBTLE'
  | 'DISABLED'
  | 'SELECTED'
  | 'SELECTED_HOVER'
  | 'SELECTED_PRESSED'
  | 'INACTIVE'
  | 'TRANSPARENT'

export type ThemeBackgroundVariantSubtle =
  | 'INFORMATION'
  | 'SUCCESS'
  | 'WARNING'
  | 'ERROR'
  | 'PRIMARY'
  | 'SECONDARY'
  | 'ACCENT'
  | 'BRAND'

export type ThemeButtonVariant = 'PRIMARY' | 'SECONDARY' | 'ACCENT' | 'GHOST' | 'DISABLED'

/**
 * Hook to get a theme background color by variant.
 * @param variant - The variant type for which to get the background color.
 * @returns The background color for the specified variant.
 */
export const useThemeBackground = (variant?: ThemeBackgroundVariant) => {
  const { theme } = useContext(TrilogyThemeContext)
  const themeMode = useThemeMode()
  const colors = theme?.colors[themeMode]

  switch (variant) {
    case 'INFORMATION':
      return colors.bgInformation
    case 'INFORMATION_SUBTLE':
      return colors.bgInformationSubtle
    case 'SUCCESS':
      return colors.bgSuccess
    case 'SUCCESS_SUBTLE':
      return colors.bgSuccessSubtle
    case 'WARNING':
      return colors.bgWarning
    case 'WARNING_SUBTLE':
      return colors.bgWarningSubtle
    case 'ERROR':
      return colors.bgError
    case 'ERROR_SUBTLE':
      return colors.bgErrorSubtle
    case 'PRIMARY':
      return colors.bgPrimary
    case 'PRIMARY_SUBTLE':
      return colors.bgPrimarySubtle
    case 'SECONDARY':
      return colors.bgSecondary
    case 'SECONDARY_SUBTLE':
      return colors.bgSecondarySubtle
    case 'ACCENT':
      return colors.bgAccent
    case 'ACCENT_SUBTLE':
      return colors.bgAccentSubtle
    case 'BRAND':
      return colors.bgBrand
    case 'BRAND_SUBTLE':
      return colors.bgBrandSubtle
    case 'DISABLED':
      return colors.bgDisabled
    case 'SELECTED':
      return colors.bgSelected
    case 'SELECTED_HOVER':
      return colors.bgSelectedHover
    case 'SELECTED_PRESSED':
      return colors.tokenbackgroundSelectedPressed
    case 'INACTIVE':
      return colors.bgInactive
    case 'TRANSPARENT':
      return 'transparent'
  }
}

/**
 * Hook to get a theme background color by subtle variant.
 * @param variant - The subtle variant type for which to get the background color.
 * @returns The background color for the specified subtle variant.
 */
export const useThemeBackgroundSubtle = (variant?: ThemeBackgroundVariantSubtle): string => {
  const { theme } = useContext(TrilogyThemeContext)
  const themeMode = useThemeMode()
  const colors = theme?.colors[themeMode]

  switch (variant) {
    case 'INFORMATION':
      return colors.bgInformationSubtle
    case 'SUCCESS':
      return colors.bgSuccessSubtle
    case 'WARNING':
      return colors.bgWarningSubtle
    case 'ERROR':
      return colors.bgErrorSubtle
    case 'PRIMARY':
      return colors.bgPrimarySubtle
    case 'SECONDARY':
      return colors.bgSecondarySubtle
    case 'ACCENT':
      return colors.bgAccentSubtle
    case 'BRAND':
      return colors.bgBrandSubtle
    default:
      return colors.bgSecondarySubtle
  }
}

export const useThemeButtonVariant = (variant?: ThemeButtonVariant) => {
  const { theme } = useContext(TrilogyThemeContext)
  const themeMode = useThemeMode()
  const colors = theme?.colors[themeMode]

  switch (variant) {
    case 'SECONDARY':
      return {
        backgroundColor: colors.btnBgSecondary,
        textColor: colors.btnTextSecondary,
        borderColor: colors.btnBorderSecondary,
        hoverBackgroundColor: colors.btnBgSecondaryHover,
        pressedBackgroundColor: colors.btnBgSecondaryPressed,
      }
    case 'ACCENT':
      return {
        backgroundColor: colors.btnBgAccent,
        textColor: colors.btnTextAccent,
        borderColor: colors.btnBgAccent,
        hoverBackgroundColor: colors.btnBgAccentHover,
        pressedBackgroundColor: colors.btnBgAccentPressed,
      }
    case 'GHOST':
      return {
        backgroundColor: colors.btnBgGhost,
        textColor: colors.btnTextGhost,
        borderColor: colors.btnBgGhost,
        hoverBackgroundColor: colors.btnBgGhostHover,
        pressedBackgroundColor: colors.btnBgGhostPressed,
      }
    case 'DISABLED':
      return {
        backgroundColor: colors.bgDisabled,
        textColor: colors.textDisabled,
        borderColor: colors.borderDisabled,
        hoverBackgroundColor: colors.bgDisabled,
        pressedBackgroundColor: colors.bgDisabled,
      }
    default:
      return {
        backgroundColor: colors.btnBgPrimary,
        textColor: colors.btnTextPrimary,
        borderColor: colors.btnBgPrimary,
        hoverBackgroundColor: colors.btnBgPrimaryHover,
        pressedBackgroundColor: colors.btnBgPrimaryPressed,
      }
  }
}
