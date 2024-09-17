import { Accessibility, AlignableProps } from '@/objects'
import { Invertable } from '@/objects/facets/Invertable'
import { Styles } from '@/types'
import { PriceLevel, PriceLevelValues } from './PriceEnum'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable, Accessibility, AlignableProps {
  children?: React.ReactNode
  amount: number
  mention?: string
  period?: string
  showCents?: boolean
  inline?: boolean
  level?: PriceLevel | PriceLevelValues
  className?: string
  striked?: boolean
  overline?: string
  style?: Styles
  tagAmount?: number
  tagSymbol?: '€' | '%' | string
}
