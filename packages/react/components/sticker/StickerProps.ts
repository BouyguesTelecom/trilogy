import { Invertable } from '../../objects/facets/Invertable'
import { Small } from '../../objects/facets/Small'
import { AlertProps } from '../../objects/facets/Alert'
import { VariantProps } from '../../objects/facets/Variant'
import { Hat } from '../../objects/facets/Hat'
import { StickerMarkup, StickerMarkupValues } from './StickerEnum'

export interface StickerProps extends Small, VariantProps, AlertProps, Hat, Invertable {
  children: React.ReactNode
  /**
   * @deprecated
   */
  stretched?: boolean
  className?: string
  markup?: StickerMarkup | StickerMarkupValues
  flag?: boolean
  outlined?: boolean
}
