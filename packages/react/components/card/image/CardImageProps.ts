import { Image } from 'react-native'
import { Clickable, Dev } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { CardImageSize, CardImageSizeValues } from './CardImageEnum'

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
