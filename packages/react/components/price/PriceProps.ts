import { PriceVariant, PriceLevel, PriceVariantValues, PriceLevelValues } from './PriceEnum'
import { Invertable } from '../../objects/facets/Invertable'
import { Accessibility } from '../../objects/facets/Accessibility'
import { AlertProps } from '../../objects/facets/Alert'
import { AlignableProps } from '../../objects/facets/Alignable'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable, Accessibility, AlignableProps, AlertProps {
  children?: React.ReactNode
  variant?: PriceVariant | PriceVariantValues
  amount: number
  mention?: string
  period?: string
  showCents?: boolean
  inline?: boolean
  level?: PriceLevel | PriceLevelValues
  /** @deprecated v-1.3.2 */
  huge?: boolean
  className?: string
  striked?: boolean
  suptitle?: string
}
