import { Clickable } from '@/objects'
import { CardImageSize, CardImageSizeValues } from './CardImageEnum'

/**
 * Card Image Interface
 */
export interface CardImageProps extends Clickable {
  src: string | number
  size?: CardImageSize | CardImageSizeValues
  className?: string
  alt?: string
  contain?: boolean
}
