import { AlignableProps, Clickable } from '../../objects'
import { DimensionValue, type Image, ImageLoadEventData, NativeSyntheticEvent } from 'react-native'
import { CommonProps } from '../../objects/facets/CommonProps'

export enum RadiusValues {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum CacheControl {
  IMMUTABLE = 'default',
  WEB = 'reload',
  CACHE_ONLY = 'force-cache',
}

export enum Priority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
}

export enum ResizeMode {
  CONTAIN = 'contain',
  COVER = 'cover',
  STRETCH = 'stretch',
  CENTER = 'center',
}

export interface Source {
  uri?: string
  headers?: { [key: string]: string }
  priority?: Priority
  cache?: CacheControl
}

export interface OnLoadEvent {
  nativeEvent: ImageLoadEventData
}

export interface OnProgressEvent {
  nativeEvent: {
    loaded: number
    total: number
  }
}
export interface ImageProps extends AlignableProps, Clickable, CommonProps {
  src: string | number | Source
  alt?: string
  circled?: boolean
  width?: DimensionValue | number | undefined
  height?: DimensionValue | number | undefined
  radius?: RadiusValues
  resizeMode?: ResizeMode
  priority?: Priority
  cache?: CacheControl
  fallback?: boolean
  onLoadStart?: () => void
  onProgress?: (event: OnProgressEvent) => void
  onLoad?: (event: NativeSyntheticEvent<ImageLoadEventData>) => void
  onError?: () => void
  onLoadEnd?: () => void
}

export type ImageRef = HTMLElement
export type ImageNativeRef = Image
