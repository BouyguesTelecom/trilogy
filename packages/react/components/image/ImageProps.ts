import { AlignableProps, Clickable } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

// Platform-agnostic types
type DimensionValue = any
type Image = any
type ImageLoadEventData = any
type NativeSyntheticEvent<T> = any

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
/**
 * Image component props
 * Compatible with both web and native platforms
 */
export interface ImageProps extends AlignableProps, Clickable, CommonProps {
  /** Image source - string (URL), number (require), or Source object */
  src: string | number | Source
  /** Alt text for accessibility */
  alt?: string
  /** Circular image */
  circled?: boolean
  /** Image width */
  width?: DimensionValue | number | undefined
  /** Image height */
  height?: DimensionValue | number | undefined
  /** Border radius */
  radius?: RadiusValues

  // Enhanced props (native-specific, ignored on web)
  /** Image resize mode (native only) */
  resizeMode?: ResizeMode
  /** Loading priority hint (native only) */
  priority?: Priority
  /** Cache control hint (native only) */
  cache?: CacheControl
  /** Enable fallback behavior on error (native only) */
  fallback?: boolean

  // Loading events (native only)
  /** Called when image loading starts (native only) */
  onLoadStart?: () => void
  /** Called during image loading with progress (native only) */
  onProgress?: (event: OnProgressEvent) => void
  /** Called when image loads successfully - platform-agnostic event */
  onLoad?: (event: any) => void
  /** Called when image loading fails (native only) */
  onError?: () => void
  /** Called when image loading ends (native only) */
  onLoadEnd?: () => void
}

export type ImageRef = HTMLElement
export type ImageNativeRef = Image
