import { Accessibility, AlignableProps, Dev } from '@/objects'
import { Invertable } from '@/objects/facets/Invertable'
import { PriceLevel, PriceLevelValues } from './PriceEnum'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable, Accessibility, AlignableProps, Dev, CommonProps {
  children?: React.ReactNode
  amount: number
  mention?: string
  period?: string
  hideCents?: boolean
  inline?: boolean
  level?: PriceLevel | PriceLevelValues
  oldAmount?: number
  overline?: string
  tagAmount?: number
  tagSymbol?: '€' | '%' | string
}
