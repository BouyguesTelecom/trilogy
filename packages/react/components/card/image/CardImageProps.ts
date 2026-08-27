import { Image } from 'react-native'
import { CardImageSize, CardImageSizeValues } from '@/components/card/image/CardImageEnum'
import { Clickable } from "@/interfaces/Clickable";
import { Dev } from "@/interfaces/Dev";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Card Image Interface
 */
export interface CardImageProps extends Clickable, CommonProps, Dev {
  src: string | number
  size?: CardImageSize | CardImageSizeValues
  alt?: string
  contain?: boolean
}

export type CardImageRef = HTMLDivElement
export type CardImageNativeRef = Image
