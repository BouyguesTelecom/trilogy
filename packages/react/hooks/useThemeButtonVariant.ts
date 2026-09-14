import { useContext } from 'react'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'
import { useThemeMode } from './useThemeMode'

export type ThemeButtonVariant = 'PRIMARY' | 'SECONDARY' | 'ACCENT' | 'GHOST' | 'DISABLED'

export const useThemeButtonVariant = (variant?: ThemeButtonVariant) => {
  const trilogyTheme = useContext(TrilogyThemeContext)
  if (!trilogyTheme?.theme) return null
  const themeMode = useThemeMode()
  const colors = trilogyTheme?.theme?.colors[themeMode]

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
