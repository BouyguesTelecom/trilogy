import { Clickable } from '../../../objects'
import { CardImageSize, CardImageSizeValues } from './CardImageEnum'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Card Image Interface
 */
export interface CardImageProps extends Clickable, CommonProps {
  src: string | number
  size?: CardImageSize | CardImageSizeValues
  alt?: string
  contain?: boolean
}
