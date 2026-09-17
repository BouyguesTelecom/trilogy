import { THEME_TRILOGY } from '@/theme'
import { Dispatch, SetStateAction } from 'react'

export type ITrilogyTheme = typeof THEME_TRILOGY

export interface ITrilogyThemeContext {
  theme: ITrilogyTheme | null
  setTheme: Dispatch<SetStateAction<ITrilogyTheme>>
  mode?: 'dark' | 'light'
  setMode: Dispatch<SetStateAction<'dark' | 'light' | undefined>>
}

export interface ITrilogyProvider {
  theme: ITrilogyTheme
  mode?: 'dark' | 'light'
}
