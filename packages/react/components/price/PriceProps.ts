import { PriceLevel, PriceLevelValues } from '@/components/price/PriceEnum'
import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { AlignableProps } from "@/interfaces/Alignable";
import { Dev } from "@/interfaces/Dev";
import { Invertable } from "@/interfaces/Invertable";
import { CommonProps } from "@/interfaces/CommonProps";

/**
 * Price Interface
 */
export interface PriceProps extends Invertable, Accessibility, AlignableProps, Dev, CommonProps {
  children?: React.ReactNode
  amount?: number
  mention?: string
  period?: string
  hideCents?: boolean
  level?: PriceLevel | PriceLevelValues
  oldAmount?: number
  overline?: string
}

export type PriceRef = HTMLDivElement
export type PriceNativeRef = View
