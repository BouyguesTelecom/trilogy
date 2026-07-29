import { AlignableProps, Clickable, Dev } from '../../objects'
import { DimensionValue, type Image } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Radius, RadiusValues } from '../../objects/facets/Radius'

export type ImageCache = 'immutable' | 'web' | 'cacheOnly'

export interface ImageProps extends AlignableProps, Clickable, CommonProps, Dev {
  src: string | number
  alt?: string
  circled?: boolean
  width?: DimensionValue | number | undefined
  height?: DimensionValue | number | undefined
  radius?: Radius | RadiusValues
  cache?: ImageCache
}

export type ImageRef = HTMLElement
export type ImageNativeRef = Image
