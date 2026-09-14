import type { THEME_TRILOGY } from '@/theme'
import { Dispatch, SetStateAction } from 'react'

export interface ITrilogyTheme {
  colors: typeof THEME_TRILOGY.colors
  fonts: typeof THEME_TRILOGY.fonts
  radius: typeof THEME_TRILOGY.radius
  spacings: typeof THEME_TRILOGY.spacings
}

export interface ITrilogyThemeContext {
  theme: ITrilogyTheme | null
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>
  mode: 'dark' | 'light' | 'auto'
  setMode: Dispatch<SetStateAction<'dark' | 'light' | 'auto'>>
}

export interface ITrilogyProvider {
  theme: ITrilogyTheme
  mode?: 'dark' | 'light' | 'auto'
}
