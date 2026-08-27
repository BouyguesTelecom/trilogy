import { DimensionValue, type Image } from 'react-native'
import { AlignableProps } from "@/interfaces/Alignable";
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";
import { Radius, RadiusValues } from "@/interfaces/Radius";

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
