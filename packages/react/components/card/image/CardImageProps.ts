import { CardImageSize, CardImageSizeValues } from '@/components/card/image/CardImageEnum'
import { Clickable } from '@/objects/facets/Clickable'

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
