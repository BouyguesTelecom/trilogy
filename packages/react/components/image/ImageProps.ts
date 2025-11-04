import { AlignableProps, Clickable } from '../../objects'
import { DimensionValue, type Image } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'

export enum RadiusValues {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type ImageCache = 'immutable' | 'web' | 'cacheOnly'

export interface ImageProps extends AlignableProps, Clickable, CommonProps {
  src: string | number
  alt?: string
  circled?: boolean
  width?: DimensionValue | number | undefined
  height?: DimensionValue | number | undefined
  radius?: RadiusValues
  cache?: ImageCache
}

export type ImageRef = HTMLElement
export type ImageNativeRef = Image
