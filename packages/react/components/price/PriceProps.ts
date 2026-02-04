import { Accessibility, AlignableProps, Dev, JustifiableProps } from '../../objects'
import { Invertable } from '../../objects/facets/Invertable'
import { PriceLevel, PriceLevelValues } from './PriceEnum'
import { CommonProps } from '../../objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Price Interface
 */
export interface PriceProps extends Invertable, Accessibility, JustifiableProps, Dev, CommonProps {
  children?: React.ReactNode
  amount?: number
  mention?: string
  period?: string
  hideCents?: boolean
  level?: PriceLevel | PriceLevelValues
  oldAmount?: number
  overline?: string
  /**
   * @deprecated Use justify instead
   */
  align?: AlignableProps['align']
}

export type PriceRef = HTMLDivElement
export type PriceNativeRef = View
