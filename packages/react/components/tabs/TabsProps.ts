import { Accessibility, Clickable, Dev, TypographyAlign, TypographyAlignValues } from '@/objects'
import { Centerable } from '@/objects/facets/Centerable'
import { JustifiableProps } from '@/objects/facets/Justifiable'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Tabs Interface
 */
export interface TabsProps extends Centerable, JustifiableProps, Clickable, Accessibility, Dev, CommonProps {
  children: React.ReactNode | string
  disabled?: boolean
  activeIndex?: number
  fullwidth?: boolean
  marginless?: boolean
  inverted?: boolean
  align?: 'left' | 'right' | 'center'
  shadowless?: boolean
  textAlign?: TypographyAlign | TypographyAlignValues
}
