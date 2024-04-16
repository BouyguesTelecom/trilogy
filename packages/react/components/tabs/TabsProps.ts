import { Centerable } from '../../objects/facets/Centerable'
import { JustifiableProps } from '../../objects/facets/Justifiable'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { TypographyAlign, TypographyAlignValues } from '../../objects/Typography/TypographyAlign'

/**
 * Tabs Interface
 */
export interface TabsProps extends Centerable, JustifiableProps, Clickable, Accessibility {
  children: React.ReactNode | string
  disabled?: boolean
  activeIndex?: number
  /** @deprecated */
  rightAlign?: boolean
  /** @deprecated */
  clipped?: boolean
  fullwidth?: boolean
  className?: string
  marginless?: boolean
  inverted?: boolean
  align?: 'left' | 'right' | 'center'
  shadowless?: boolean
  textAlign?: TypographyAlign | TypographyAlignValues
}
