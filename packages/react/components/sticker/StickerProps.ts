import { StickerMarkup, StickerMarkupValues } from '@/components/sticker/StickerEnum'
import { VariantProps } from '@/objects/facets'
import { Hat } from '@/objects/facets/Hat'
import { Small } from '@/objects/facets/Small'

export interface StickerProps extends Small, VariantProps, Hat {
  children: React.ReactNode
  className?: string
  markup?: StickerMarkup | StickerMarkupValues
  outlined?: boolean
}
