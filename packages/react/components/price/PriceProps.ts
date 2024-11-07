import { Accessibility, AlignableProps, Dev } from '@/objects'
import { Invertable } from '@/objects/facets/Invertable'
import { PriceLevel, PriceLevelValues } from './PriceEnum'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable, Accessibility, AlignableProps, Dev {
  children?: React.ReactNode
  amount: number
  mention?: string
  period?: string
  hideCents?: boolean
  inline?: boolean
  level?: PriceLevel | PriceLevelValues
  className?: string
  oldAmount?: number
  overline?: string
  tagAmount?: number
  tagSymbol?: '€' | '%' | string
}
