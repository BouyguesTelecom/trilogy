import type { ImageSourcePropType } from 'react-native'
import type { THEME_COLORS_TRILOGY, THEME_FONTS_TRILOGY, THEME_RADIUS_TRILOGY, THEME_SPACINGS_TRILOGY } from '@/theme'
import { Dispatch, SetStateAction } from 'react'

export interface ITrilogyTheme {
  icons: Record<string, ImageSourcePropType> | {}
  colors: typeof THEME_COLORS_TRILOGY
  fonts: typeof THEME_FONTS_TRILOGY
  radius: typeof THEME_RADIUS_TRILOGY
  spacings: typeof THEME_SPACINGS_TRILOGY
}

export interface ITrilogyThemeContext {
  theme: ITrilogyTheme
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>
  mode: 'dark' | 'light' | 'auto'
  setMode: Dispatch<SetStateAction<'dark' | 'light' | 'auto'>>
}

export interface ITrilogyProvider {
  theme: ITrilogyTheme
  mode?: 'dark' | 'light' | 'auto'
}
