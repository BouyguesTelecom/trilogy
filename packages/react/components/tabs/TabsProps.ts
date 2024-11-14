import { Accessibility } from '@/objects/facets/Accessibility'
import { Centerable } from '@/objects/facets/Centerable'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { JustifiableProps } from '@/objects/facets/Justifiable'
import { TypographyAlign, TypographyAlignValues } from '@/objects/Typography/TypographyAlign'

/**
 * Tabs Interface
 */
export interface TabsProps extends Centerable, JustifiableProps, Clickable, Accessibility, Dev {
  children: React.ReactNode | string
  disabled?: boolean
  activeIndex?: number
  fullwidth?: boolean
  className?: string
  marginless?: boolean
  inverted?: boolean
  align?: 'left' | 'right' | 'center'
  shadowless?: boolean
  textAlign?: TypographyAlign | TypographyAlignValues
}
