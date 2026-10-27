import { Small } from '@/objects/facets/Small'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'
import { VariantProps } from '@/objects/facets/Variant'
import { CommonProps } from '@/objects/facets/CommonProps'
import { IconName, IconNameValues } from '@/components/icon'
import { View } from 'react-native'

export interface StickerProps extends Small, VariantProps, CommonProps, Accessibility, Dev {
  label: string
  iconName?: IconName | IconNameValues
  outlined?: boolean
}

export type StickerRef = HTMLParagraphElement
export type StickerNativeRef = View
