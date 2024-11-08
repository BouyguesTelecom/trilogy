import { Small } from '@/objects/facets/Small'
import { VariantProps } from '@/objects/facets'
import { CommonProps } from '@/objects/facets/CommonProps'
import { IconName, IconNameValues } from '@/components/icon'

export interface StickerProps extends Small, VariantProps, CommonProps {
  label: string
  iconName?: IconName | IconNameValues
  outlined?: boolean
}
