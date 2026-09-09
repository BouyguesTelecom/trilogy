import type { ImageSourcePropType } from 'react-native'

export interface ITrilogyTheme {
  icons?: { [key: string]: ImageSourcePropType }
  colors: { [key: string]: [string, string, string] }
  fontFamily?: { regular: string; medium: string; bold: string; speak?: string }
  radius?: { smaller: number; small: number; medium: number; large: number; full: number }
}
