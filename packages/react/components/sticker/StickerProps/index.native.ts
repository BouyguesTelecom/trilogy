import { IconName, IconNameValues } from '@/components/icon/IconNameEnum'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Accessibility, VariantProps } from '@/objects/facets/index.native'
import { Small } from '@/objects/facets/Small'
import { View } from 'react-native'

export interface StickerProps extends Small, VariantProps, CommonProps, Accessibility {
  label: string
  iconName?: IconName | IconNameValues
  outlined?: boolean
}

export type StickerRef = HTMLParagraphElement
export type StickerNativeRef = View
