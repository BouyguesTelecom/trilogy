import { useContext } from 'react'
import { useColorScheme } from 'react-native'
import { TrilogyThemeContext } from '@/contexts/mobile/trilogyContext'

/**
 * Hook to get the current theme mode (light or dark).
 * @returns The current theme mode as a string ('light' or 'dark').
 */
export const useThemeMode = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const { mode } = useContext(TrilogyThemeContext)
  const themeMode = mode === 'auto' ? colorScheme : mode
  return themeMode
}
