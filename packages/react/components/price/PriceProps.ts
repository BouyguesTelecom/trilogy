import { Accessibility, AlignableProps, Dev } from '@/objects'
import { Invertable } from '@/objects/facets/Invertable'
import { Styles } from '@/types'
import { PriceLevel, PriceLevelValues } from './PriceEnum'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable, Accessibility, AlignableProps, Dev {
  children?: React.ReactNode
  amount: number
  mention?: string
  period?: string
  showCents?: boolean
  inline?: boolean
  level?: PriceLevel | PriceLevelValues
  className?: string
  strikedAmount?: number
  overline?: string
  style?: Styles
  tagAmount?: number
  tagSymbol?: '€' | '%' | string
}
