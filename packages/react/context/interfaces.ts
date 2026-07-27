import type { ImageSourcePropType } from 'react-native'

export interface RadiusTheme {
  small: number
  medium: number
  large: number
  full: number
}

export interface FontFamilyTheme {
  regular: string
  medium: string
  bold: string
}

export interface ITrilogyTheme {
  icons?: { [key: string]: ImageSourcePropType }
  colors: any
  fontFamily?: FontFamilyTheme | {}
  radius?: RadiusTheme | {}
}
