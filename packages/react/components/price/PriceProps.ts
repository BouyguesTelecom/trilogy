import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Dev } from '@/objects/facets/Dev'
import { Invertable } from '@/objects/facets/Invertable'
import { PriceLevel, PriceLevelValues } from '@/components/price/PriceEnum'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'
import { ReactNode } from 'react'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable, Accessibility, AlignableProps, Dev, CommonProps {
  children?: ReactNode
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
