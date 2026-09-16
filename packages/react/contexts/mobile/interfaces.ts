import { THEME_TRILOGY } from '@/theme'
import { Dispatch, SetStateAction } from 'react'

export type ITrilogyTheme = typeof THEME_TRILOGY

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
