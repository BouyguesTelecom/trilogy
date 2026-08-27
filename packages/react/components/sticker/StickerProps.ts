import { IconName, IconNameValues } from '@/components/icon'
import { View } from 'react-native'
import { Small } from "@/interfaces/Small";
import { Accessibility } from "@/interfaces/Accessibility";
import { Dev } from "@/interfaces/Dev";
import { VariantProps } from "@/interfaces/Variant";
import { CommonProps } from "@/interfaces/CommonProps";

export interface StickerProps extends Small, VariantProps, CommonProps, Accessibility, Dev {
  label: string
  iconName?: IconName | IconNameValues
  outlined?: boolean
}

export type StickerRef = HTMLParagraphElement
export type StickerNativeRef = View
